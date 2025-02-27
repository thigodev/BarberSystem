import { sign } from "jsonwebtoken";
import authConfig from "../../../config/auth";

import AppError from "../../../shared/errors/AppError";
import IUsersRepository from "../repositories/IUsersRepository";
import IHashProvider from "../providers/HashProvider/models/IHashProvider";

import type User from "../infra/typeorm/entities/User";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: User;
  token: string;
}

class AuthenticateUserService {
  constructor(
    private readonly usersRepository: IUsersRepository,
    private readonly hashProvider: IHashProvider
  ) {}

  public async execute({ email, password }: IRequest): Promise<IResponse> {
    console.log("🔍 Tentando autenticar usuário:", email);

    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      console.log("❌ Usuário não encontrado!");
      throw new AppError("Seu email está errado!", 401);
    }

    if (!user.password) {
      console.log("⚠️ Usuário encontrado, mas sem senha definida.");
      throw new AppError("Erro interno: senha não disponível.", 500);
    }

    console.log("🔑 Comparando senhas...");
    const passwordMatched = await this.hashProvider.compareHash(
      password,
      user.password
    );

    if (!passwordMatched) {
      console.log("❌ Senha incorreta!");
      throw new AppError("Sua senha está errada", 401);
    }

    if (!authConfig.jwt.secret) {
      console.log("🚨 Erro: authConfig.jwt.secret não está definido!");
      throw new AppError("Erro interno de autenticação", 500);
    }

    console.log("🔐 Gerando token...");
    const { expiresIn, secret } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn, // Corrigido de 'expiredIn' para 'expiresIn'
    });

    console.log("✅ Autenticação bem-sucedida!");

    return {
      user,
      token,
    };
  }
}

export default AuthenticateUserService;

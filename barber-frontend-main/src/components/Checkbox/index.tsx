"use client"

import type React from "react"
import { type InputHTMLAttributes, useEffect, useRef, useState, useCallback } from "react"
import type { IconBaseProps } from "react-icons"
import { FiAlertCircle } from "react-icons/fi"
import { useField } from "@unform/core"

import { Container, CheckboxWrapper, Label, Error } from "./styles"

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label?: string
  containerStyle?: object
  icon?: React.ComponentType<IconBaseProps>
}

export const Checkbox: React.FC<CheckboxProps> = ({
  name,
  label = "Sou barbeiro",
  containerStyle,
  icon: Icon,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const [isChecked, setIsChecked] = useState(false)
  const [isFocused, setIsFocused] = useState(false)

  const { fieldName, defaultValue = false, error, registerField } = useField(name)

  const handleInputFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const handleInputBlur = useCallback(() => {
    setIsFocused(false)
  }, [])

  const handleCheckboxChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked)
  }, [])

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "checked",
    })
  }, [fieldName, registerField])

  useEffect(() => {
    setIsChecked(defaultValue)
  }, [defaultValue])

  return (
    <Container style={containerStyle} isErrored={!!error} isFocused={isFocused}>
      {Icon && <Icon size={20} />}

      <CheckboxWrapper>
        <input
          id={fieldName}
          type="checkbox"
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onChange={handleCheckboxChange}
          defaultChecked={defaultValue}
          checked={isChecked}
          ref={inputRef}
          {...rest}
        />
        <Label htmlFor={fieldName} isChecked={isChecked}>
          {label}
        </Label>
      </CheckboxWrapper>

      {error && (
        <Error title={error}>
          <FiAlertCircle color="#C53030" size={20} />
        </Error>
      )}
    </Container>
  )
}

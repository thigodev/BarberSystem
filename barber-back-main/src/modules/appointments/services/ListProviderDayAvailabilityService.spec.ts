import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository'
import ListProviderDayAvailabilityService from './ListProviderDayAvailabilityService'

let fakeAppointmentsRepository: FakeAppointmentsRepository
let listProviderDayAvailabilityService: ListProviderDayAvailabilityService

describe('ListProviderDayAvailability', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository()
    listProviderDayAvailabilityService = new ListProviderDayAvailabilityService(fakeAppointmentsRepository)
  })

  test('Should be able to list he day availability from provider', async () => {
    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      user_id: 'user_id',
      date: new Date(2023, 11, 6, 14, 0, 0)
    })

    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      user_id: 'user_id',
      date: new Date(2023, 11, 6, 15, 0, 0)
    })

    jest.spyOn(Date, 'now').mockImplementationOnce(() => {
      return new Date(2023, 11, 6, 11).getTime()
    })

    const availability = await listProviderDayAvailabilityService.execute({
      provider_id: 'user',
      year: 2023,
      month: 12,
      day: 6
    })

    expect(availability).toEqual(
      expect.arrayContaining([
        { hour: 8, available: false },
        { hour: 9, available: false },
        { hour: 10, available: false },
        { hour: 13, available: true },
        { hour: 14, available: false },
        { hour: 15, available: false },
        { hour: 16, available: true }
      ])
    )
  })
})

export default function TimeToSeconds(time: string){
  const [ hour = '0', minute = '0', second = '0' ] = time.split(':')

  let hoursInSeconds = Number(hour) * 3600
  let minutesInSeconds = Number(minute) * 60
  let seconds = Number(second)

  const result = hoursInSeconds + minutesInSeconds + seconds

  return result
}
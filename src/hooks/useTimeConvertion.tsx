function UseTimeConvertion( time: number){
  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  const [ minDez, minUnit ] = String(minutes).padStart(2, '0')
  const [ secDez, secUnit ] = String(seconds).padStart(2, '0')

  return { 
    minDez,
    minUnit,
    secDez,
    secUnit
  }
}

export default UseTimeConvertion
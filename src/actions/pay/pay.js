const pay = ({ basket }) => {
  return {
    payload: basket,
    type: 'PAY'
  }
}

export default pay

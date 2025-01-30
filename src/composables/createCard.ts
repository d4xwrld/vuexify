export function Card(){
  const Card = (title: string) => ({
    title,
    deleteCard: false,
    name: 'Accept',
    status: 'primary'
  })
  return Card
}

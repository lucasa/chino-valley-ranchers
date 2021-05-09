import { products } from '../../content/products/index'

export default function handler(req, res) {
  res.status(200).json(products)
}
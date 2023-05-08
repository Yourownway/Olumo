import React from 'react'
import ProductsCard from '../molecules/ProductsCard'

export default function NosProduits() {
  return (
    <section id="nos-produits">
      <h1>Nos produits</h1>
      <p>Nam quis nulla. Integer malesuada. In in enim a arcu imperdiet malesuada. Sed vel lectus. Donec odio urna, tempus molestie, porttitor ut, iaculis quis, sem. Phasellus rhoncus. Aenean id metus id velit ullamcorper pulvinar. Vestibulum fermentum tortor id mi. Pellentesque ipsum. Nulla non arcu lacinia neque faucibus fringilla. Nulla non lectus sed nisl molestie malesuada. Proin in tellus sit amet nibh dignissim sagittis. Vivamus luctus egestas leo. Maecenas sollicitudin. Nullam rhoncus aliquam metus. Etiam egestas wisi a erat.
      </p>

      <div>
        <div className='products-tab'></div>
        <ProductsCard />
      </div>
    </section>
  )
}

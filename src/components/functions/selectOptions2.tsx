export const selectOptions2 = (cities, states, sellers) => {
    return(
        {
            citySlct : cities,
        stateSlct: states,
        properties:{
          default: "properties",
          sell: "For Sell",
          rent: "For Rent",
        },
        seller: sellers,
        bedrooms:{
          default:"Bedrooms",
          1:"1",
          2:"2",
          3:"3",
          4:"4"
        },
        bathrooms:{
          default:"Bathrooms",
          1:"1",
          2:"2",
          3:"3",
          4:"4"
        },
        max_price:{
          default:"Max Price",
          100000: '$100,000',
          200000: '$200,000',
          300000: '$300,000',
          400000: '$400,000',
          500000: '$500,000',
          600000: '$600,000',
          700000: '$700,000',
          800000: '$800,000',
          900000: '$900,000',
          1000000: '$1,000,000'
        },
        min_sqft: {
          default:"Min Sqft",
          1000: '1,000+',
          1500: '1,500+',
          2000: '2,000+',
          2500: '2,500+',
          3000: '3,000+'
        }
        }
    )
}
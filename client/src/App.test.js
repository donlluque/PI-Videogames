import { OrderByRating, filterByGenre} from './redux/actions.js'

describe('Action - Tests:', ()=>{
    it('Debe retornar una action con las propiedades type "FILTER_BY_GENRE" y payload, su valor lo recibe por argumento', ()=>{
        expect(filterByGenre('Action')).toEqual({
            type: "FILTER_BY_GENRE",
            payload: 'Action'
        })
    })

    it('Debe retornar una action con las propiedades type "ORDER_BY_RATING" y payload, su valor lo recibe por argumento', ()=>{
        expect(OrderByRating('high')).toEqual({
            type: "ORDER_BY_RATING",
            payload: 'high'
        })
    })
})
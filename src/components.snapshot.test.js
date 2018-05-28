/* eslint-env jest */

import React from 'react'
import { Header, Attribution, MinRatingSelect, MovieGridItem, MovieGrid, MainComponent } from './components'
import { results } from './movies.json'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

const slicedResults = results.slice(0, 3)

describe('Header', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Header />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})

describe('Attribution', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Attribution />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})

describe('MinRatingSelect', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<MinRatingSelect value={5} onChange={() => {}} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})

describe('MovieGridItem', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<MovieGridItem movie={slicedResults[1]} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})

describe('MovieGrid', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<MovieGrid minRating={7} movies={slicedResults} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})

describe('Main component', () => {
  it('should match snapshot', () => {
    const mainComp = (
      <MainComponent
        handleMinRatingChange={() => {}}
        handleFetchMovies={() => {}}
        minRating={8}
        movies={slicedResults}
      />
    )
    const wrapper = shallow(mainComp)

    expect(toJson(wrapper)).toMatchSnapshot()
  })
})

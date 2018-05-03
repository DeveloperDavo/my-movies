import React, { Component } from "react";
import styled from 'styled-components';

const smallScreen = '(min-width: 576px)'
const largeScreen = '(min-width: 992px)'

export const Header = () => {
  const Title = styled.h1`
    margin: 0;
    font-size: 3rem;
  `;

  const HeaderWrapper = styled.header`
    background-color: #222;
    color: white;
  `;

  return (
    <HeaderWrapper>
      <Title>My Movies</Title>
    </HeaderWrapper>
  );
};

const MinRatingSelect = ({ value, onChange }) => {
  const Select = styled.select`
    display: inline-block;
    height: 2rem;
    vertical-align: middle;
    border: 1px solid #ced4da;
  `;

  const options = [<option key="0" value="0">none</option>];
  for (let i = 5; i <= 10; i = i + 0.5) {
    options.push(<option key={i} value={i}>{i}</option>);
  }
  return (
    <div id="MinRatingSelect">
      <label>Choose a minimum rating: </label>
      <Select value={value} onChange={onChange}>
        {options}
      </Select>
    </div>
  );
};

const MovieGridItem = ({ movie, imageSrc }) => {
  const MovieGridItem = styled.div`
    margin: 1rem;
    padding: 1rem;
    background-color: white;
  `;

  return (
    <MovieGridItem name='MovieGridItem'>
      <img
        width="200"
        src={imageSrc}
        alt={movie.title}
      />
      <h3>{movie.title}</h3>
      <div>Rating: {movie.vote_average}</div>
      <div>Review Count: {movie.vote_count}</div>
    </MovieGridItem>
  )

}

export const MovieGrid = ({ movies, minRating }) => {
  const MovieGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    @media ${smallScreen} { 
        grid-template-columns: 1fr 1fr;
    @media ${largeScreen} { 
        grid-template-columns: 1fr 1fr 1fr;
    }
  `;

  const movieGrid = movies
    .filter(movie => movie.vote_average >= minRating)
    .map(movie => {
      const imageSrc = `http://image.tmdb.org/t/p/w200/${movie.poster_path}`;
      return (
        <MovieGridItem movie={movie} imageSrc={imageSrc} name='MovieGridItem' key={movie.id} />
      );
    });
  return <MovieGrid>{movieGrid}</MovieGrid>;
};

const Attribution = () => {
  const Footer = styled.footer`
    margin: 1rem;
    display: flex;
    justify-content: center;
  `;
  const Logo = styled.img`
    align-self: center;
    height: 2rem;
  `;
  const AttributionText = styled.div`
    padding: 1rem;
    text-align: initial;
  `;
  return (
    <Footer>
      <Logo src="tmdb-logo.png" alt="tmdb logo"/>
      <AttributionText>
        This product uses the TMDb API but is not endorsed or certified by TMDb.
      </AttributionText>
    </Footer>
  )
}

export class MainComponent extends Component {
  constructor(props) {
    super(props)

    const { handleMinRatingChange, handleFetchMovies } = this.props;
    handleMinRatingChange.bind(this);
    handleFetchMovies.bind(this);
  }


  componentDidMount() {
    this.props.handleFetchMovies()
  }

  render() {
    const Title = styled.div`
      margin: 2rem;
      font-size: 1.5em;
    `;

    const { minRating, handleMinRatingChange, movies } = this.props;
    return (
      <main>
        <Title>Movies now playing</Title>
        <MinRatingSelect
          value={minRating}
          onChange={handleMinRatingChange}
        />
        <MovieGrid movies={movies} minRating={minRating} />
        <Attribution />
      </main>
    );
  }
}
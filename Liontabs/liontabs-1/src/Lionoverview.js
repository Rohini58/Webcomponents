import { LitElement, html, css } from 'lit-element';

const movieData = [
  {
    title: 'SPY',
    director: 'Nikhil',
    stars: 'Kajal',
    platform: 'Aha',
  },
  {
    title: 'Skandha',
    director: 'Ram',
    stars: 'Lella',
    platform: 'Prime',
  },
  {
    title: 'Red',
    director: 'Ram',
    stars: 'Samantha',
    platform: 'Hotstar',
  },
];
export class MovieList extends LitElement {
  static styles = css`
    .card {
      box-shadow: 0 4px 8px 0;
      transition: 0.3s;
      width: 30%;
      margin: 20px;
      display: inline-block;
    }

    .card:hover {
      box-shadow: 0 8px 16px 0;
    }

    .container {
      padding: 2px 16px;
    }
  `;

  render() {
    return html`
      <h2>Movie Cards</h2>
      ${movieData.map(movie => this.renderMovieCard(movie))}
    `;
  }

  renderMovieCard(movie) {
    return html`
      <div class="card">
        <div class="container">
          <h4><b>Title:</b> ${movie.title}</h4>
          <p><b>Director:</b> ${movie.director}</p>
          <p><b>Stars:</b> ${movie.stars}</p>
          <p><b>Platform:</b> ${movie.platform}</p>
        </div>
      </div>
    `;
  }
}

import React from 'react';

export default class Popular extends React.Component {
  render() {
    const languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python']
    return (
      <ul className='flex-center'>
        {languages.map( (lang, index) => (
          <li key={index}>
            <button className='btn-clear nav-link'>
              {lang}
            </button>
          </li>
        ))}
      </ul>
    )
  }
}
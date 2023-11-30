import './App.css';
import Main from './components/Main'
import Header from './components/Header'
import Search from './components/Search'
import CountryItem from './components/CountryItem'
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const [theme, setTheme] = useState('light-theme')
  const [navbg, setNavbg] = useState('light-theme')

  const [countries, setCountries] = useState([])

  const fetchCountries = () => {
    fetch("https://restcountries.com/v3.1/all")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setCountries(data)
      })
  }

  useEffect(() => {
    fetchCountries()
  }, [])

  // const [filterCountries, setFilterCountries] = useState([])

  const modeSwitch = () => {
    theme === 'light-theme' ? setTheme('dark-theme') : setTheme('light-theme')
    navbg === 'light-theme' ? setNavbg('theme-variant') : setNavbg('light-theme')
  }

  useEffect(() => {
    document.body.className = theme
    document.body.className = navbg
  }, [theme, navbg])


  const [regionPick, setRegionPick] = useState("")

  const getRegion = (data) => {
    setRegionPick(data)
    console.log(data)
  }

  const [searchTerm, setSearchTerm] = useState("")

  const pull_data = (data) => {
    setSearchTerm(data)
    console.log(data)
  }

  const [selectedCountry, setSelectedCountry] = useState("")

  const handleClick = (event, key) => {
    console.log(event.target);
    console.log('key index: ', key);
    setSelectedCountry(key)
    console.log(selectedCountry)
  };


  const regionList = [
    {
      id: 1,
      value: 'Africa'
    }, {
      id: 2,
      value: 'Americas'
    }, {
      id: 3,
      value: 'Asia'
    }, {
      id: 4,
      value: 'Europe'
    }, {
      id: 5,
      value: 'Oceania'
    }
  ];

  const { pathname } = useLocation()

  return (
    <div className="App">
      <Header theme={theme} modeSwitch={modeSwitch} />
      {pathname === '/' ?
        <div>
          <Search regionList={regionList} func_1={getRegion} func_2={pull_data} theme={theme} />
        </div> : null
      }
      <Routes>
        <Route exact path='/' element={<Main theme={theme} countries={countries} regionPick={regionPick} searchTerm={searchTerm} func={handleClick} />} />
        <Route exact path='/key' element={<CountryItem countries={countries} theme={theme} selectedCountry={selectedCountry} />} />
      </Routes>
    </div>
  );
}

export default App;

import './App.css';
import React, { useState, useEffect } from "react"
import useFetch from './hooks/use-featch';
import getNames from './services/get-names';



export default function App() {

  const { data: names, loading } = useFetch(getNames, []);
  const api = JSON.stringify(names)

  return (
    
    <div>
     { loading ? <>loading</> : <>{api}</> }
    </div>
  )
}


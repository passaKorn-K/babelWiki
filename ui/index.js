// index.js naja
import React, {Component} from 'react'
import {render} from 'react-dom'
import routes from './routes'


render(routes() ,document.getElementById('app'))
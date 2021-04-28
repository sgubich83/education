import { call, put, all } from 'redux-saga/effects'
import { AxiosResponse } from 'axios'
// import { ActionType } from 'types'

// Subtypes
export const REQUEST_TYPE = '_STARTED'
export const SUCCESS_TYPE = '_SUCCESS'
export const FAILURE_TYPE = '_FAILURE'

// API call types
export const API_CALL_ALL = 'API_CALL_ALL'

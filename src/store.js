import {writable} from 'svelte/store'

export const phase = writable('TITLE')
export const selectedCourse = writable('')
export const waitTime = writable(2)
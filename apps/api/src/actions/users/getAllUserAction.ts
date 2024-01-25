import { getAllUserRepo } from '@/repositories/users/getAllUserRepo'
import React from 'react'

export const getAllUserAction = async() => {
  try {
    const data = await getAllUserRepo()
    return data
  } catch (error) {
    throw error
  }
}

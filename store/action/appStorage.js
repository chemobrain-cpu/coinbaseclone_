import IO from 'socket.io-client'
export const SIGNUP_USER = "SIGNUP_USER";
export const FORCEUSERIN = "FORCEUSERIN";
import AsyncStorage from '@react-native-async-storage/async-storage';
/* Admin actions*/
//let username = await AsyncStorage.getItem('username');
//AsyncStorage.setItem('username',username);

let socket = IO(`/`)
let timer
//utility function for calculating if token expires
let calculateRemainingTime = (expiryDate) => {
  //getting current time in milliseconds

  const currentTime = new Date().getMilliseconds()

  //getting expiration time in milliseconds
  const adjustExpirationTime = (expiryDate * 60 * 60 * 1000)
  const timeLeft = adjustExpirationTime - currentTime

  return timeLeft
}
let retrievedStoredToken = async () => {
  let tokenFromStorage = await AsyncStorage.getItem('token');

  let expiryDate = await AsyncStorage.getItem('expiry');

  const timeLeft = calculateRemainingTime(expiryDate)

  if (timeLeft <= 3600) {

    await AsyncStorage.removeItem('token')
    await AsyncStorage.removeItem('expiry')
    await AsyncStorage.removeItem('userId')

    return {
      token: "",
      expiresIn: ""
    }
  }
  return {
    token: tokenFromStorage,
    expiresIn: timeLeft


  }

}
export const checkIfIsLoggedIn = () => {
  return async (dispatch, getState) => {
    try {
      let response
      //check if token is expired

      let { token, expiresIn } = retrievedStoredToken()

      if (!token) {
        return false
      }

      //convert expiresIN backt to hours
      expiresIn = expiresIn / (60 * 60 * 1000)

      await AsyncStorage.setItem('tokenExpiry', expiresIn);
      await AsyncStorage.setItem('token', token);


      let userId = await AsyncStorage.getItem('userId')

      if (!userId) {
        return false
      }

      response = await fetch(`/userByTokens`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "header": `${token}`
        }


      })
      if (response.status == 200) {
        let data = await response.json()
        data.response.token = token
        data.response.expiresIn = expiresIn
        dispatch({ type: FORCEUSERIN, payload: data.response })
      }




    } catch (err) {
      console.log(err)

    }

  }
}

export const adminsignup = (data) => {
  return async (dispatch, getState) => {

    try {
      const response = await fetch(`/auth/adminSignup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
      if (response.status === 404) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }
      if (response.status === 300) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }
      if (response.status === 200) {
        let data = await response.json()

        dispatch({ type: SIGNUP_USER, payload: data })
        return {
          bool: true,
          //data here refers to user and dispatch
          message: data.response
        }
      }
    } catch (err) {
      console.log(err)
      return {
        bool: false,
        message: "network error"
      }

    }

  }

}
export const adminlogin = (data) => {
  return async (dispatch, getState) => {
    //do some check on the server if its actually login before proceding to dispatch
    try {
      const response = await fetch(`/auth/adminLogin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
      if (response.status === 404) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }
      if (response.status === 300) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }
      if (response.status === 200) {
        let data = await response.json()


        localStorage.setItem("token", data.response.token)
        localStorage.setItem("expiry", data.response.expiresIn)
        localStorage.setItem("user", JSON.stringify(data.response.user))

        dispatch({ type: LOGIN_USER, payload: data.response })
        return {
          bool: true,
          //data here refers to user and dispatch
          message: data.response
        }
      }
    } catch (err) {
      return {
        bool: false,
        message: "network error"
      }

    }

  }

}
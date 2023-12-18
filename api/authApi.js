import connect from '../connect/connect';


export const createAccount = async (user) => {
    try {
        const response = await fetch(connect.userUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });

        console.log(response.status);

        if (!response.ok) {
            throw new Error(`Failed to create account. Status: ${response.status}`);
        }

        const createdUser = await response.json();
        return createdUser;

    } catch (error) {
        console.error("Error creating account:", error);
        throw error;
    }
};

export const registerAccount = async (email, password) => {
    try {
        const response = await fetch(`${connect.userUrl}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        console.log(response.status);

        if (!response.ok) {
            throw new Error(`Failed to register account. Status: ${response.status}`);
        }

        const registeredUser = await response.json();
        return registeredUser;

    } catch (error) {
        console.error("Error registering account:", error);
        throw error;
    }
};


export const loginAccount = async (email, password) => {
    try {
        const response = await fetch(connect.userUrl + "/login", {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({email, password})
        })

        console.log(response.status);  

        if (!response.ok) {
            throw new Error(`Failed to login to account. Status: ${response.status}`);
        }

        const loggedUser = await response.json();
        return loggedUser

    } catch (error) {
        console.error("Error login to account:", error);
        throw error;
    }
    
}


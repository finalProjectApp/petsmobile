import connect from '../connect/connect';


export const getAccount = async (token) => {
    try {
        const response = await fetch(connect.userUrl + "/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `bearer ${token}`,
            },
            body: JSON.stringify({email, password}),
        });

        console.log(response.status);

        if (!response.ok) {
            throw new Error(`Failed to get account. Status: ${response.status}`);
        }

        const loggedIn = await response.json();
        return loggedIn;
    } catch (error) {
        console.error("Error getting account:", error);
        throw error;
    }
};

export const updateAccount = async (token, updatedAccountData) => {
    try {
        const response = await fetch(connect.userUrl + "/", {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `bearer ${token}`,
            },
            body: JSON.stringify(updatedAccountData),
        });

        console.log(response.status);

        if (!response.ok) {
            throw new Error(`Failed to update account. Status: ${response.status}`);
        }

        const updatedAccount = await response.json();
        return updatedAccount;
    } catch (error) {
        console.error("Error updating account:", error);
        throw error;
    }
};
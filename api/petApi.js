import connect from '../connect/connect';

export const createPet = async (token, pet) => {
    try {
        const response = await fetch(connect.baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `bearer ${token}`,
            },
            body: JSON.stringify(pet),
        });

        console.log(response.status);

        if (!response.ok) {
            throw new Error(`Failed to create pet. Status: ${response.status}`);
        }

        const createdPet = await response.json();
        return createdPet;
    } catch (error) {
        console.error("Error creating pet:", error);
        throw error;
    }
};

export const getMyPets = async (token) => {
    console.log("getMyPets token = " + token)
    const response = await fetch(connect.baseUrl, {
        method:'Get',
        headers:{
            'Content-Type':'application/json',
            'authorization': `bearer ${token}`},
    })
    console.log(response.status);  

    try {
        const myPets = await response.json();
        return myPets
    } catch (error) {
        console.error("Error parsing JSON:", error);
        throw error; 
    }
}

export const getPetById = async (token, petId) => {
    console.log("getPetById petId = " + petId);
    console.log("getPetById token = " + token);

    const response = await fetch(`${connect.baseUrl}/pets/${petId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'authorization': `bearer ${token}`,
        },
    });
    console.log(response.status);

    try {
        const pet = await response.json();
        return pet;
    } catch (error) {
        console.error("Error parsing JSON:", error);
        throw error; 
    }
};

export const updatePetById = async (token, petId, updatedPetData) => {
    try {
        console.log("updatePetById petId = " + petId);
        console.log("updatePetById token = " + token);

        const response = await fetch(`${connect.baseUrl}/pets/${petId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `bearer ${token}`,
            },
            body: JSON.stringify(updatedPetData),
        });

        console.log(response.status);

        if (!response.ok) {
            // If the response status is not in the range 200-299, throw an error.
            throw new Error(`Failed to update pet. Status: ${response.status}`);
        }

        const updatedPet = await response.json();
        return updatedPet;
        
    } catch (error) {
        console.error("Error updating pet:", error);
        throw error;
    }
};

export const deletePetById = async (token, petId) => {
    try {
        console.log("deletePetById petId = " + petId);
        console.log("deletePetById token = " + token);

        const response = await fetch(`${connect.baseUrl}/pets/${petId}`, {
            method: 'DELETE', 
            headers: {
                'Content-Type': 'application/json',
                'authorization': `bearer ${token}`,
            },
        });

        console.log(response.status);

        if (!response.ok) {
            throw new Error(`Failed to delete pet. Status: ${response.status}`);
        }

        return { message: 'Pet deleted successfully' };

    } catch (error) {
        console.error("Error deleting pet:", error);
        throw error;
    }
};
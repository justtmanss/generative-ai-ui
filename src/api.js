const BASE_URL = "http://localhost:8000";

export const uploadText = async (text) => {
    const response = await fetch(`${BASE_URL}/upload-text/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
    });
    return await response.json();
};

export const uploadFile = async (file, endpoint) => {
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch(`${BASE_URL}/${endpoint}/`, {
        method: "POST",
        body: formData,
    });
    return await response.json();
};

export const fetchOutput = async (fileName) => {
    const response = await fetch(`${BASE_URL}/download-output/?file_name=${fileName}`);
    return await response.blob();
};

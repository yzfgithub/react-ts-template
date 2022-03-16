const resultData = {
    code: 200,
    success: true,
    message: null,
    data: null,
}

export function createResult(data: Record<string, any> = {}) {
    return JSON.stringify({...resultData, data: { ...resultData, ...data }})
}
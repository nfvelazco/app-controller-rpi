export interface AzureAuth {
    user_id : string
    user_claims : AzureClaims[]
}

export interface AzureClaims {
    typ : string
    val : string
}

export interface ResponseAuth {
    userName : string | undefined
    userId : string
}
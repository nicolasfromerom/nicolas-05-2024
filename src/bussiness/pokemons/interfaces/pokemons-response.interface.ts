export interface PokemonsListResponse {
    count:    number;
    next:     string;
    previous: null;
    results:  PokemonsListResponseData[];
}

export interface PokemonsListResponseData {
    name: string;
    url:  string;
}
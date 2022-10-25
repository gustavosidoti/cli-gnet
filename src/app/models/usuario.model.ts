
export class Usuario {
    constructor(
        public nombre: string,
        public email: string,
        public role?: string,
        public status?: boolean,
        public google?: boolean,
        public uid?: string,
    ) {}

    }
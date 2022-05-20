export type MyError = {
  message: string | ErrorMessages;
  resolution?: string | undefined;
}

export const enum ErrorMessages {
  DBError = 'error occured while dealing with db.'
}

export const isError = (
	toBeDetermined: any | MyError
): toBeDetermined is MyError => {
	return !!(toBeDetermined as MyError)?.message;
};
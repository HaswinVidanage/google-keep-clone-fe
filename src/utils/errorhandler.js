import {upperFirst, toLower} from "lodash";

export const SanitizeError = (errorMessage = 'An error occurred') => {
	 return upperFirst(
		 toLower(errorMessage.trim())
	 );
};

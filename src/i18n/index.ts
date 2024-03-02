import spanish from '../../cv-es.json';
import english from '../../cv-en.json';

const LANG = {
	ENGLISH: 'en',
	SPANISH: 'es',
};

export const getI18N = ({
	currentLocale = 'e',
}: {
	currentLocale: string | undefined;
}) => {
	if (currentLocale === LANG.ENGLISH) return {...spanish, ...english};
	return spanish;
};

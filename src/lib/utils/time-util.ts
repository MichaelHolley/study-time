export const transformToDisplay = (number: number) => {
	if (number < 10) {
		return `0${number}`;
	}

	return `${number}`;
};

export const getRemainingSeconds = (secs: number) => {
	return secs % 60;
};

export const getRemainingMinutes = (secs: number) => {
	return Math.floor(secs / 60);
};

export const getRemainingHours = (secs: number) => {
	return Math.floor(secs / 3600);
};
export const toCompactDisplayFormat = (hours: number, minutes: number, seconds: number) => {
	if (hours > 0) {
		return `${transformToDisplay(hours)}:${transformToDisplay(minutes)}:${transformToDisplay(seconds)}`;
	}

	return `${transformToDisplay(minutes)}:${transformToDisplay(seconds)}`;
};

// Change to `Promise<void>` and the error goes away
let promise: Promise<void> | undefined;

const sleep = async (ms: number) => {
	await new Promise((r) => setTimeout(r, ms));
};

export const main = async () => {
	if (!promise) {
		promise = sleep(1000);
		await promise;
	} else {
		await promise;
	}
};

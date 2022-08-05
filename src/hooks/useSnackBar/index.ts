import { useSnackbar, VariantType } from 'notistack';

export const useAppSnackbar = () => {
	const { enqueueSnackbar } = useSnackbar();

	return (
		value: string,
		variant: VariantType | undefined,
		duration: number,
	) => {
		enqueueSnackbar(value, {
			variant: variant,
			autoHideDuration: duration,
		});
	};
};

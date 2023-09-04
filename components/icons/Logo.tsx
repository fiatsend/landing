import Image from 'next/image';

const Logo = () => (
	<>
		<Image
			src={'./fiatsend-logo.png'}
			width={50}
			height={50}
			alt="fiatsend logo"
		/>
	</>
);

export default Logo;

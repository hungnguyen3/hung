import {
	AspectRatio,
	Box,
	Button,
	HStack,
	Image,
	Link,
	Skeleton,
	Stack,
	StackProps,
	Text,
	useBreakpointValue,
	useColorModeValue,
} from '@chakra-ui/react';
import * as React from 'react';
import { months } from '../Months';
import { Work } from './_data';

interface Props {
	work: Work;
	rootProps?: StackProps;
}

// Chakra ui sample code snippet
export const WorkCard = (props: Props) => {
	const { work, rootProps } = props;
	const { name, imageUrl, positionName } = work;

	const startDate = `${
		months[work.startDate.getMonth()]
	} ${work.startDate.getFullYear()}`;

	const endDate = work.endDate
		? `${months[work.endDate.getMonth()]} ${work.endDate.getFullYear()}`
		: 'Present';

	return (
		<Stack spacing={useBreakpointValue({ base: '4', md: '5' })} {...rootProps}>
			<Box position="relative">
				<AspectRatio ratio={4 / 3}>
					<Image
						src={imageUrl}
						alt={name}
						draggable="false"
						fallback={<Skeleton />}
						borderRadius={useBreakpointValue({ base: 'md', md: 'xl' })}
					/>
				</AspectRatio>
			</Box>
			<Stack spacing="1" align="center" isFullWidth={true}>
				<Text
					align="center"
					fontWeight="medium"
					color={useColorModeValue('gray.700', 'gray.400')}
				>
					{name}
				</Text>
				<Text
					align="center"
					fontWeight="normal"
					color={useColorModeValue('gray.700', 'gray.400')}
				>
					{positionName}
				</Text>
				<Text
					align="center"
					fontWeight="normal"
					color={useColorModeValue('gray.700', 'gray.400')}
				>
					({startDate} - {endDate})
				</Text>
			</Stack>
			{/* <Stack align="center">
				<Button
					variant="outline"
					color={useColorModeValue('systemLightBlue', 'systemGreen')}
					borderColor={useColorModeValue('systemLightBlue', 'systemGreen')}
					border="2px"
					isFullWidth={true}
				>
					Learn more
				</Button>
				<Link
					textDecoration="underline"
					fontWeight="medium"
					color={useColorModeValue('gray.600', 'gray.400')}
				>
					Website
				</Link>
			</Stack> */}
		</Stack>
	);
};

# React Native CachedImage

A react-native component to save and load images from cache.

## Quick Links

- [GitHub](https://github.com/PatoSala/rn-image-cache)
- [npm](https://www.npmjs.com/package/@patosala/rn-image-cache)

## Installation

```bash
npm install rn-image-cache
```

## Usage

```jsx
import { View, StyleSheet } from 'react-native';
import { CachedImage } from '@patosala/rn-image-cache';

export default function App() {
	const url = 'https://example/image.jpg';

	return (
		<View style={styles.container}>
			<CachedImage 
				source={{ uri: url }}
				style={styles.picture}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	picture: {
		width: '100%',
		aspectRatio: '1/1'
	}
})
```

## Features

| Feature | Status |
| --- | --- |
| Save pictures to cache | ✅ |
| Clear old pictures from cache | ❌ (In progress) |
| Custom loading component | ❌ (In progress) |
| Event handler when image has been loaded (for dev purposes such as confirming if image has been loaded from cache or from a remote source) | ❌ (In Progress) |

If you think some features are missing, make an issue and let me know!
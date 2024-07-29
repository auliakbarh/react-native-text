import test from 'react-test-renderer';

import Text from './Text.component';

describe('Text component unit test', () => {
  it('should render Text component with children "Hello World!"', () => {
    const tree = test.create(
      <Text testID="text-hello-world">Hello World!</Text>
    );

    expect(tree.toJSON()).toMatchSnapshot();
    expect(tree.toTree().props.children).toBe('Hello World!');
    expect(tree.toTree().props.testID).toBe('text-hello-world');
  });
});

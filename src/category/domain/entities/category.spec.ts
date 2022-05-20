import {Category, CategoryProperties} from "./category";

describe('Category Unit Tests', () => {

    test('constructor of category', () => {
        // Arrange
        const props: CategoryProperties = {
            name: 'Movie',
            description: 'some description',
            is_active: true,
            created_at: new Date
        }

        // Act
        const category = new Category(props);

        // Assert
        expect(category.props).toStrictEqual(props)

        expect(category.name).toBe('Movie');
        expect(category.description).toBe('some description');
        expect(category.is_active).toBeTruthy();
        expect(category.created_at).toBe(props.created_at);
    });
});

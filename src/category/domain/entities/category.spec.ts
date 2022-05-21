import {Category, CategoryProperties} from "./category";

describe('Category Unit Tests', () => {

    test('constructor of category', () => {
        // Arrange
        const props: CategoryProperties = {
            name: 'Movie',
            description: 'some description',
            is_active: false,
            created_at: new Date
        }

        // Act
        let category = new Category(props);

        // Assert
        expect(category.props).toStrictEqual(props)

        expect(category.name).toBe('Movie');
        expect(category.description).toBe('some description');
        expect(category.is_active).toBeFalsy();
        expect(category.created_at).toBe(props.created_at);

        category = new Category({name: 'Series'});
        expect(category.name).toBe('Series');
        expect(category.description).toBe('');
        expect(category.is_active).toBeTruthy();
        expect(!!category.created_at).toBeTruthy();
    });
});

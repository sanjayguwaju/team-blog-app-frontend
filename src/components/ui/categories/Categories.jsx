const Categories = () => {
    const categories = [
        'Technology',
        'Programming',
        'Web Development',
        'Data Science',
        'Productivity'
    ];

    // Predefined colors with proper shades
    const colors = ['#338A89', '#6E6A54', '#338A89', '#6E6A54', '#338A89'];

    return (
        <div className="col-12">
            <div className="list-group mb-3">
                {categories.map((category, index) => (
                    <a key={index} href="#" style={{ backgroundColor: colors[index % colors.length] }} className="list-group-item list-group-item-action text-white">
                        {category}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Categories;

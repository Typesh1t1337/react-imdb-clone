import {useEffect, useState} from "react";
import styles from "../App.module.scss";



const coverMovies = [
    {
        title : "Игра пристолов",
        url : "https://static.hbo.com/game-of-thrones-1-1920x1080.jpg",
        key_words :
            "США • фэнтези  Режиссёр: Дэвид Натте В ролях: Питер Динклэйдж, Лина Хиди"
    },
    {
        title : "Во все тяжкие",
        url : "https://m.media-amazon.com/images/M/MV5BMTJiMzgwZTktYzZhZC00YzhhLWEzZDUtMGM2NTE4MzQ4NGFmXkEyXkFqcGdeQWpybA@@._V1_.jpg",
        key_words : "США • криминал  Режиссёр: Мишель Макларен\n" +
            "В ролях: Брайан Крэнстон, Анна Ганн"
    },
    {
        title: "Снегопад",
        url: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/02/snowfall-season-5.jpg",
        key_words : "США • Драма, Криминал"
    },
    {
        title: "Клан сопрано",
        url: "https://www.pravilamag.ru/upload/img_cache/870/87004a2f815f4f80db100c7ee96b642d_ce_1625x1014x0x135.jpg",
        key_words : "США • драма  Режиссёр: Тимоти Ван Паттен"
    }
]

export function IndexContentBar() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    const prevSlide = () =>{
        setCurrentSlide((prevIndex) =>
            prevIndex === 0 ? coverMovies.length -1 : prevIndex - 1
        );
    }

    const nextSlide = () =>{
        setCurrentSlide((prevIndex) =>
        prevIndex === coverMovies.length -1  ? 0 : prevIndex + 1)
    }


    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
        }
    },[]);

    return (
        <div className={styles.content_header}>
            <div className={styles.scroll_side_bar}>
                <div className={styles.scroll_side_bar_content}>
                    <button onClick={prevSlide} className={styles.scroll_prev_btn}>
                        ❮
                    </button>
                    <div className={styles.carousel_container}>
                        <div className={styles.carousel_items} style={{
                            transform: `translateX(-${currentSlide * 100}%)`,
                        }}>
                            {coverMovies.map((item, index) => (
                                <div className={styles.carousel_item} key={index}>
                                    <div className={styles.dark}>
                                    </div>
                                    <img src={item.url} alt={item.title} className={styles.carousel_img}/>
                                    <h1 className={styles.item_title}>{item.title}</h1>
                                    <h2 className={styles.item_key_words}>{item.key_words}</h2>
                                </div>
                            ))}
                        </div>
                    </div>
                    <button onClick={nextSlide} className={styles.scroll_next_btn}>
                        ❯
                    </button>
                </div>
            </div>
            <div className={styles.header_desc}>
                <div className={styles.header_inner_desc}>
                    <div className={styles.upper_text}>
                        <h1>Cinema World</h1>
                    </div>
                    <div className={styles.bottom_text}>
                        <h2>
                            Discover the best movies, TV shows and casts. Immerse yourself in the exciting world of cinema with us.
                        </h2>
                    </div>
                        <div className={styles.get_started_btn}>
                            {isAuthenticated ? (
                                <a>
                                </a>
                                ):(
                                  <a>
                                      Get started
                                  </a>
                                )}
                        </div>
                </div>
            </div>
        </div>
    )
}
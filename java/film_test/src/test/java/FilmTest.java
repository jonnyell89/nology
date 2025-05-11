import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;
class FilmTest {
    Film film18 = new Film("film18", Film.RATING_18);
    Film film15 = new Film("film15", Film.RATING_15);
    Film film12 = new Film("film12", Film.RATING_12);
    Film filmPG = new Film("filmPG", Film.RATING_PG);
    Film filmU = new Film("filmU", Film.RATING_U);

    // Write a test for the Film class, to determine the method isAllowedToView() works correctly.
    // You will need to create test data for each of the film categories.
    // 🤞 Remember to add both positive and negative tests.

    // methodName_State_Return
    @Test
    @DisplayName("Viewer is >= 18, watching an 18 rated film.")
    void isAllowedToView_18OrOlderViewerWatching18RatedFilm_ReturnsTrue() {
        assertTrue(film18.isAllowedToView(18));
        assertTrue(film18.isAllowedToView(27));
        assertTrue(film18.isAllowedToView(35));
        assertTrue(film18.isAllowedToView(47));
        assertTrue(film18.isAllowedToView(53));
    }

    @Test
    void isAllowedToView_15OrYoungerViewerWatching18RatedFilm_ReturnsFalse() {
        assertFalse(film18.isAllowedToView(15));
        assertFalse(film18.isAllowedToView(12));
        assertFalse(film18.isAllowedToView(9));
        assertFalse(film18.isAllowedToView(7));
        assertFalse(film18.isAllowedToView(5));
    }

    @Test
    @DisplayName("")
    void isAllowedToView_ViewerIs15to17Watching18RatedFilm_ReturnsFalse() {
//        assertFalse((film18.isAllowedToView(16)));
//        assertFalse((film18.isAllowedToView(17)));
//        assertFalse((film18.isAllowedToView(18)));
        assertAll("18 Rated Film",
                () -> assertFalse(film18.isAllowedToView(16)),
                () -> assertFalse(film18.isAllowedToView(17)),
                () -> assertFalse(film18.isAllowedToView(18)));
    }

    @Test
    @DisplayName("")
    void isAllowedToView_AnyAgeViewerWatchingURatedFilm_ReturnsTrue() {
//        assertTrue(filmU.isAllowedToView(1));
//        assertTrue(filmU.isAllowedToView(12));
//        assertTrue(filmU.isAllowedToView(21));
//        assertTrue(filmU.isAllowedToView(47));
//        assertTrue(filmU.isAllowedToView(-9));
        assertAll("U Rated Film",
                () -> assertTrue(filmU.isAllowedToView(1)),
                () -> assertTrue(filmU.isAllowedToView(12)),
                () -> assertTrue(filmU.isAllowedToView(21)),
                () -> assertTrue(filmU.isAllowedToView(47)),
                () -> assertTrue(filmU.isAllowedToView(-9)));
    }
}

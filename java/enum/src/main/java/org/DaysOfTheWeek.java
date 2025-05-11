package org;

//public class DaysOfTheWeek {
//    public static final int MONDAY = 0;
//    public static final int TUESDAY = 1;
//    public static final int WEDNESDAY = 2;
//    public static final int THURSDAY = 3;
//    public static final int FRIDAY = 4;
//    public static final int SATURDAY = 5;
//    public static final int SUNDAY = 6;
//}

public enum DaysOfTheWeek {
    MONDAY(1), TUESDAY(2), WEDNESDAY(3), THURSDAY(4), FRIDAY(5), SATURDAY(6), SUNDAY(7);

    int value;
    String shortcut;

    DaysOfTheWeek(int i) {
        this.value = i;
        this.shortcut = shortcut;
    }

    public int getValue() {
        return value;
    }

    public String getShortcut() {
        return shortcut;
    }
}

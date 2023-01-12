package com.jiangren.bootcamp.java;

public class Bottles {
    // take in only 1 number and return 1 piece of lyrics
    public static String verse(int number) {
        // nothing will be returned if number is negative (meaningless)
        if (number < 0) {
            return null;
        }
        // Different lyrics will be returned when 0,1,2 are passed in
        // other numbers are similar
        String versedLyric = "";
        if (number == 0) {
            versedLyric =
                    "No more bottles of beer on the wall, no more bottles of beer.\n" +
                            "Go to the store and buy some more, 99 bottles of beer on the wall.";
        } else if (number == 1) {
            versedLyric =
                    "1 bottle of beer on the wall, 1 bottle of beer.\n" +
                            "Take it down and pass it around, no more bottles of beer on the wall.";
        } else if (number == 2) {
            versedLyric =
                    "2 bottles of beer on the wall, 2 bottles of beer.\n" +
                            "Take one down and pass it around, 1 bottle of beer on the wall.";
        } else {
            versedLyric =
                    number + " bottles of beer on the wall, " + number + " bottles of beer.\n" +
                            "Take one down and pass it around, " + (number - 1) + " bottles of beer on the wall.";
        }
        return versedLyric;
    }

    // take in 2 numbers and return lyrics from num1 to num2 using recursion
    public static String verses(int fromNum, int toNum) {
        // if num1 == num2, only return 1 piece of lyric
        if (fromNum == toNum) {
            return verse(toNum);
        }
        // lyrics = (lyrics of current number) + (lyrics of remaining numbers)
        String versedLyric = verse(fromNum) + "\n\n" + verses(fromNum - 1, toNum);
        return versedLyric;
    }

    // sing the whole song from 99 to 0
    public static String song() {
        String result = verses(99, 0);
        return result;
    }

    // main method for TEST ONLY
    public static void main(String[] args) {
        System.out.println(song());
    }
}



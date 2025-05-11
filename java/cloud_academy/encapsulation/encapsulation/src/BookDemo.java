public class BookDemo {
    public static void main(String[] args) {
        Book theMayorOfCasterBridge = new Book("Thomas Hardy", "The Mayor Of Casterbridge", "Fiction", 330);
        Book theCaseAgainstReality = new Book("Donald Hoffman", "The Case Against Reality", "Non-fiction", 270);
        Book theHeroWithAThousandFaces = new Book("Joseph Campbell", "The Hero With A Thousand Faces", "Non-fiction", 300);

//        printBookDetails(theMayorOfCasterBridge);
//        printBookDetails(theCaseAgainstReality);
//        printBookDetails(theHeroWithAThousandFaces);

        theMayorOfCasterBridge.printBookDetails();
        theCaseAgainstReality.printBookDetails();
        theHeroWithAThousandFaces.printBookDetails();
    }

//    public static void printBookDetails(Book book) {
//        System.out.println("Title: " + book.getTitle());
//        System.out.println("Author: " + book.getAuthor());
//        System.out.println("Genre: " + book.getGenre());
//        System.out.println("Pages: " + book.getNumPages());
//    }
}

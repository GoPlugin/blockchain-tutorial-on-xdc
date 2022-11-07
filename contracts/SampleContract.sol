// SPDX-License-Identifier: MIT
pragma solidity ^0.6.6;

contract SampleContract {
    uint256 public bookid;
    struct Book {
        uint256 id;
        address bookOwnedBy;
        string bookName;
    }
    mapping(uint256 => Book) public books;
    event BookAdded(string bookName, address addedBy);

    constructor() public {
        bookid = 1;
    }

    function addBooks(string memory _bookName) public {
        books[bookid] = Book(bookid, msg.sender, _bookName);
        bookid = bookid + 1;
        emit BookAdded(_bookName, msg.sender);
    }

    function viewBook(uint256 _bookId)
        public
        view
        returns (
            uint256,
            address,
            string memory
        )
    {
        return (
            books[_bookId].id,
            books[_bookId].bookOwnedBy,
            books[_bookId].bookName
        );
    }
}

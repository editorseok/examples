use std::{
    fs::File,
    io::{ErrorKind, Read},
};

fn main() {
    let f = File::open("hello.txt");
    let f = match f {
        Ok(file) => file,
        Err(ref error) if error.kind() == ErrorKind::NotFound => match File::create("hello.txt") {
            Ok(fc) => fc,
            Err(e) => panic!("Tried to create file but there was a problem: {:?}", e),
        },
        Err(error) => {
            panic!("There was a problem opening the file: {:?}", error)
        }
    };

    let f_unwrap = File::open("hello.txt").unwrap();
    let f_expect = File::open("hello.txt").expect("Failed to open hello.txt");
}

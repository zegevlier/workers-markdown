use pulldown_cmark::{html, Options, Parser};
use std::io::{self, Read};

fn main() -> io::Result<()> {
    // Modified from the example on the pulldown_cmark documentation page.
    let mut input = String::new();
    io::stdin().read_to_string(&mut input)?;

    let mut options = Options::empty();
    options.insert(Options::ENABLE_STRIKETHROUGH);
    let parser = Parser::new_ext(&input, options);

    let mut html_output = String::new();
    html::push_html(&mut html_output, parser);
    println!("{}", html_output);
    Ok(())
}

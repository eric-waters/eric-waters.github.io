import sys
import re

def svg_black_to_blue(input_path, output_path):
    with open(input_path, 'r', encoding='utf-8') as f:
        svg = f.read()

    # Replace black colors with blue (#2b7fff)
    svg = re.sub(r'(#000|#000000|black)', '#2b7fff', svg, flags=re.IGNORECASE)

    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(svg)

if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: python svg-to-blue.py input.svg output.svg")
        sys.exit(1)
    svg_black_to_blue(sys.argv[1], sys.argv[2])
const questions = [
    {
        question: "What will be the output of the following C++ code?",
        code: `#include <iostream>
        using namespace std;

        int main() {
            string name = "Julius";
            cout >> name;
            return 0;
        }`,
        type: "identification",
        answer: ["ERROR"]
    },

    {
        question: "What will be the output of the following C++ code?",
        code: `#include <iostream>
        using namespace std;

        int main() {
            int age;
            cin << age;
            cout << age;
            return 0;
        }`,
        type: "identification",
        answer: ["ERROR"]
    },

    {
        question: "What will be the output of the following C++ code if the user enters 7?",
        code: `#include <iostream>
        using namespace std;

        int main() {
            int x;
            cin >> x;
            cout << x * 2;
            return 0;
        }`,
        type: "identification",
        answer: ["14"]
    },

    {
        question: "What will be the output of the following C++ code?",
        code: `#include <iostream>
        using namespace std;

        int main() {
            int number = 15;
            if (number > 10) {
                cout << "A";
            } else {
                cout << "B";
            }
            return 0;
        }`,
        type: "identification",
        answer: ["A"]
    },

    {
        question: "What will be the output of the following C++ code?",
        code: `#include <iostream>
        using namespace std;

        int main() {
            int age = 18;
            if (age > 18) {
                cout << "Adult";
            } else {
                cout << "Minor";
            }
            return 0;
        }`,
        type: "identification",
        answer: ["Minor"]
    },

    {
        question: "What will be the output of the following C++ code?",
        code: `#include <iostream>
        using namespace std;

        int main() {
            int x = 5;

            if (x > 10) {
                if (x < 30) {
                    cout << "YES";
                } else {
                    cout << "NO";
                }
            }

            return 0;
        }`,
        type: "identification",
        answer: ["NO OUTPUT", "", "Blank", "None"]
    },

    {
        question: "What will be the output of the following C++ code?",
        code: `#include <iostream>
        using namespace std;

        int main() {
            int choice = 2;

            switch (choice) {
                case 1:
                    cout << "A";
                case 2:
                    cout << "B";
                case 3:
                    cout << "C";
                default:
                    cout << "D";
            }

            return 0;
        }`,
        type: "identification",
        answer: ["BCD"]
    },

    {
        question: "What will be the output of the following C++ code?",
        code: `#include <iostream>
        using namespace std;

        int main() {
            for (int i = 1; i <= 5; i++) {
                cout << i;
            }

            return 0;
        }`,
        type: "identification",
        answer: ["12345"]
    },

    {
        question: "What will be the output of the following C++ code?",
        code: `#include <iostream>
        using namespace std;

        int main() {
            int name = Julius;
            cout << name;
            return 0;
        }`,
        type: "identification",
        answer: ["ERROR"]
    },

    {
        question: "What will be the output of the following C++ code?",
        code: `#include <iostream>
        using namespace std;

        int main() {
            string message = Hello;
            cout << message;
            return 0;
        }`,
        type: "identification",
        answer: ["ERROR"]
    },

    {
        question: "What will be the output of the following C++ code?",
        code: `#include <iostream>
        using namespace std;

        int main() {
            int x = 10;
            cout << x;* 2;
            return 0;
        }`,
        type: "identification",
        answer: ["ERROR"]
    },

    {
        question: "What will be the output of the following C++ code?",
        code: `#include <iostream>
        using namespace std;

        int main() {
            cout << "Enter your name" endl;
            return 0;
        }`,
        type: "identification",
        answer: ["ERROR"]
    },

    {
        question: "What will be the output of the following C++ code?",
        code: `#include <iostream>
        using namespace std;

        int main() {
            cout << "Enter your name" << endl
            return 0;
        }`,
        type: "identification",
        answer: ["ERROR"]
    },
    {
        question: "What will be the output of the following C++ code?",
        code: `#include <iostream>

        int main() {
            cout << "Enter your name" << endl;
            return 0;
        }`,
        type: "identification",
        answer: ["ERROR", "Error", "error"]
    },

    {
        question: "What will be the output of the following C++ code?",
        code: `#include <stdio.h>

        int main() {
            cout << "Enter your name" << endl;
            return 0;
        }`,
        type: "identification",
        answer: ["ERROR", "Error", "error"]
    }

];

export default questions;
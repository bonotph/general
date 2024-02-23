#include <iostream>
#include <iomanip>
using namespace std;
const int N = 10;
struct Date {
    int day;
    int month;
    int year;
};

struct Book {
    int id;
    double price;
    Date date;
};
struct Library {
    Book books[10];
    int num;
};
void listOptions() {
    cout << "~~~~~~~~~Welcome!~~~~~~~~~~\n" ;
    cout << "0: Exit\n" ;
    cout <<"1: Add\n" ;
    cout << "2: Show\n" ;
    cout<< "3: Delete\n" ;
    cout << "4: Sort\n";
    cout << "~~~~~~~~~~~~~~~~~~~~~~~~~~~\n";
}

void add(Library *lib) {
    if (lib -> num < N){
        cout << "Input Book ID:"<<endl;
        cin >> lib->books[lib->num].id;
        for(int i=0;i<lib->num;i++){
            if(lib->books[lib->num].id == lib->books[i].id){
                cout << "This ID has already been entered";
                return;
            }
        }
        cout << "Input Price:"<<endl;
        cin >> lib->books[lib->num].price;
        cout << "Input Date (dd mm yyyy):"<<endl;
        cin >> lib->books[lib->num].date.day >> lib->books[lib->num].date.month >> lib->books[lib->num].date.year;
        lib->num++;
    }
    else{
        cout << "Library is full";
    }

}
void show(Library *lib) {
    for (int i = 0;i< lib->num; i++){
        cout << setfill('0')<< setw(3) << lib->books[i].id ;
        cout << fixed << setprecision(2)<< "     "<< lib->books[i].price ;
        cout << "   "<< lib->books[i].date.day << "-" << lib->books[i].date.month << "-" << lib->books[i].date.year << endl;
    }
}

void del(Library *lib) {
    int enterid;
    int foundid = -1;
    cout << "Enter the ID to be deleted" << endl;
    cin >> enterid;
    for (int i = 0;i<lib->num;i++){
        if(lib->books[i].id == enterid){
            foundid = i;
        }
        
    }
    if(foundid == -1){
        cout << "The ID cannot be found"<<endl;
    }else{
        for(int j=foundid;j<lib->num;j++){
            lib->books[j] = lib->books[j+1];
        }
        lib->num--;
    }
    

}
void sort_id(Library *lib) {
    for(int i=0; i<lib->num-1; i++){
        for(int j=0; j<lib->num-i-1;j++){
            if(lib->books[j].id>lib->books[j+1].id){
                Book temp = lib->books[j];
                lib->books[j] = lib->books[j+1];
                lib->books[j+1] = temp;
            }
        }
    }

}
void sort_date(Library *lib) {
    for(int i=0; i<lib->num-1; i++){
        for(int j=0; j<lib->num-i-1;j++){
            if(lib->books[j].date.year>lib->books[j+1].date.year 
            || ((lib->books[j].date.year==lib->books[j+1].date.year) && (lib->books[j].date.month>lib->books[j+1].date.month))
            || ((lib->books[j].date.year==lib->books[j+1].date.year) && (lib->books[j].date.month==lib->books[j+1].date.month) && (lib->books[j].date.day>lib->books[j+1].date.day))
            || ((lib->books[j].date.year==lib->books[j+1].date.year) && (lib->books[j].date.month==lib->books[j+1].date.month) && (lib->books[j].date.day==lib->books[j+1].date.day) && (lib->books[j].id>lib->books[j+1].id))){
                Book temp = lib->books[j];
                lib->books[j] = lib->books[j+1];
                lib->books[j+1] = temp;
            }

        
        }
    }
}
void sort(Library *lib) {
    int n;
    cout << "1: Sort by ID" << endl;
    cout << "2: Sort by Date" << endl;
    cin >> n;
    if(n==1){
        sort_id(lib);
    }
    if(n==2){
        sort_date(lib);
    }

}
void init(Library *p) {
    p->books[p->num].id = 3;
    p->books[p->num].price = 10.5;
    p->books[p->num].date.day = 15;
    p->books[p->num].date.month = 1;
    p->books[p->num].date.year = 1990;
    (p->num)++;
    p->books[p->num].id = 2;
    p->books[p->num].price = 20.55;
    p->books[p->num].date.day = 15;
    p->books[p->num].date.month = 2;
    p->books[p->num].date.year = 2024;
    (p->num)++;
    p->books[p->num].id = 4;
    p->books[p->num].price = 10.5;
    p->books[p->num].date.day = 20;
    p->books[p->num].date.month = 2;
    p->books[p->num].date.year = 2021;
    (p->num)++;
    p->books[p->num].id = 1;
    p->books[p->num].price = 30.1;
    p->books[p->num].date.day = 20;
    p->books[p->num].date.month = 2;
    p->books[p->num].date.year = 2021;
    (p->num)++;
}
int main() {
    Library lib;
    lib.num = 0;
    init(&lib);
    int opt;
    do{
        listOptions();
        cin >> opt;
        switch (opt){
            case 1:
                add(&lib);
                break;
            case 2:
                show(&lib);
                break;
            case 3:
                del(&lib);
                break;
            case 4:
                sort(&lib);
                break;
            case 0:
                cout << "Bye!";
                return 0;
            default:
                return 0;
        }
        cout << endl;

    }while(opt);
    return 0;
    
}
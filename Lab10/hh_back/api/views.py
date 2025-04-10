from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView

from .serializers import CompanySerializer, VacancySerializer

from .models import Company, Vacancy


# Create your views here.

#   FBV - function based views
# a.	/api/companies - List of all Companies
@api_view(['GET'])
def company_list(request):
    try:
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return Response(serializer.data)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)})

# b.	/api/companies/<int:id>/ - Get one Company
@api_view(['GET'])
def company_detail(request, id):
    try:
        company = Company.objects.get(pk=id)
        serializer = CompanySerializer(company)
        return Response(serializer.data)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=404)

@api_view(['GET'])
def company_vacancies(request, id):
    try:
        company = Company.objects.get(pk=id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=404)

    vacancies = company.vacancies.all()
    serializer = VacancySerializer(vacancies, many=True)
    return Response(serializer.data)

# CBV - class based views
class VacancyList(APIView):
    def get(self, request):
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)

class VacancyDetail(APIView):
    def get(self, id):
        try:
            vacancy = Vacancy.objects.get(pk=id)
        except Vacancy.DoesNotExist as e:
            return JsonResponse({'error': str(e)}, status=404)

        serializer = VacancySerializer(vacancy)
        return Response(serializer.data)

class TopTenVacancies(APIView):
    def top_ten_vacancies(self, request):
        vacancies = Vacancy.objects.order_by("-salary")[:10]
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)